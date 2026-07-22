/**
 * Submits a consultation form lead to the client's Google Apps Script Web App
 * (see docs/google-apps-script/Code.gs + SETUP.md). Posted as `text/plain`
 * with a JSON string body — Apps Script Web Apps can't reliably answer a CORS
 * preflight, so this stays a "simple request" to avoid one.
 */
export type ConsultationPayload = {
  source: string;
  submittedAt: string;
  data: Record<string, string>;
};

export class ConsultationEndpointNotConfiguredError extends Error {
  constructor() {
    super("NEXT_PUBLIC_CONSULTATION_ENDPOINT is not configured");
    this.name = "ConsultationEndpointNotConfiguredError";
  }
}

export async function submitConsultation(
  source: string,
  data: Record<string, string>
): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_CONSULTATION_ENDPOINT;

  if (!endpoint) {
    throw new ConsultationEndpointNotConfiguredError();
  }

  const payload: ConsultationPayload = {
    source,
    submittedAt: new Date().toISOString(),
    data,
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Consultation submit failed with status ${res.status}`);
  }
}
