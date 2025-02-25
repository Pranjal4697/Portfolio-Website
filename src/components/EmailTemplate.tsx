interface EmailTemplateProps {
  senderEmail: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  senderEmail,
  message,
}) => (
  <div style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
  }}>
    <div style={{
      textAlign: 'center',
      marginBottom: '30px',
      borderBottom: '2px solid #3b82f6',
      paddingBottom: '20px',
    }}>
      <h1 style={{
        color: '#1e40af',
        fontSize: '24px',
        margin: '0',
        marginBottom: '10px',
      }}>New Professional Inquiry</h1>
      <p style={{
        color: '#64748b',
        fontSize: '16px',
        margin: '0',
      }}>Someone is interested in connecting with you</p>
    </div>

    <div style={{
      backgroundColor: '#f8fafc',
      padding: '25px',
      borderRadius: '12px',
      marginBottom: '25px',
      border: '1px solid #e2e8f0',
    }}>
      <div style={{
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
      }}>
        <p style={{
          margin: '0',
          marginBottom: '5px',
          color: '#64748b',
          fontSize: '14px',
        }}>From:</p>
        <p style={{
          margin: '0',
          color: '#1e293b',
          fontSize: '16px',
          fontWeight: '500',
        }}>{senderEmail}</p>
      </div>

      <div style={{
        padding: '15px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
      }}>
        <p style={{
          margin: '0',
          marginBottom: '5px',
          color: '#64748b',
          fontSize: '14px',
        }}>Message:</p>
        <p style={{
          margin: '0',
          color: '#1e293b',
          fontSize: '16px',
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap',
        }}>{message}</p>
      </div>
    </div>

    <div style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f0f9ff',
      borderRadius: '12px',
      border: '1px solid #bae6fd',
    }}>
      <p style={{
        margin: '0',
        color: '#0369a1',
        fontSize: '15px',
      }}>
        You can reply directly to this email to respond to {senderEmail}
      </p>
    </div>

    <div style={{
      marginTop: '30px',
      textAlign: 'center',
      padding: '20px',
      borderTop: '1px solid #e2e8f0',
    }}>
      <p style={{
        margin: '0',
        color: '#64748b',
        fontSize: '14px',
      }}>
        This message was sent from your portfolio website contact form
      </p>
      <p style={{
        margin: '0',
        marginTop: '5px',
        color: '#94a3b8',
        fontSize: '12px',
      }}>
        {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </div>
  </div>
); 