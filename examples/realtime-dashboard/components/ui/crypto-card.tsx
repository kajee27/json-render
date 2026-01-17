import type { ComponentProps } from "@json-render/react";

interface CryptoCardProps {
  symbol: string;
  dataPath: string;
}

export function CryptoCard({ element }: ComponentProps<CryptoCardProps>) {
  const { symbol, dataPath } = element.props;

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, var(--card) 0%, rgba(99, 102, 241, 0.1) 100%)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background effect */}
      <div
        style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 150,
          height: 150,
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "pulse 3s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            marginBottom: 16,
          }}
        >
          <div>
            <div
              style={{ fontSize: 14, color: "var(--muted)", marginBottom: 4 }}
            >
              {symbol}
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              Loading...
            </div>
          </div>
          <div
            style={{
              padding: "4px 12px",
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 500,
              background: "rgba(34, 197, 94, 0.1)",
              color: "#22c55e",
            }}
          >
            +2.5%
          </div>
        </div>

        <div style={{ fontSize: 13, color: "var(--muted)" }}>
          24h Change: <span style={{ color: "#22c55e" }}>+$1,250</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
