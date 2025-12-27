import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ProjectContactEmailProps {
  email: string;
  name: string;
  message: string;
}

export default function ProjectContactEmail({
  email,
  name,
  message,
}: ProjectContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Heading style={heading}>New Project Contact</Heading>

            <Hr style={hr} />

            <Section style={section}>
              <Text style={label}>From:</Text>
              <Text style={value}>{name}</Text>
            </Section>

            <Section style={section}>
              <Text style={label}>Email:</Text>
              <Link href={`mailto:${email}`} style={emailLink}>
                {email}
              </Link>
            </Section>

            <Hr style={hr} />

            <Section style={section}>
              <Text style={label}>Message:</Text>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Hr style={hr} />

            <Section style={footer}>
              <Text style={footerText}>
                This message was sent from your portfolio contact form.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f9fafb",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const box = {
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#ffffff",
};

const heading = {
  backgroundColor: "#1f2937",
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0",
  padding: "20px",
};

const section = {
  padding: "20px",
};

const label = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase",
  margin: "0 0 8px 0",
};

const value = {
  color: "#1f2937",
  fontSize: "16px",
  margin: "0",
  fontWeight: "500",
};

const emailLink = {
  color: "#3b82f6",
  textDecoration: "underline",
  fontSize: "16px",
};

const messageText = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "0",
};

const footer = {
  backgroundColor: "#f3f4f6",
  padding: "20px",
};

const footerText = {
  color: "#9ca3af",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
};
