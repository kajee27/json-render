import type { ComponentProps } from "@json-render/react";

interface WeatherWidgetProps {
  location: string;
  dataPath: string;
}

export function WeatherWidget({ element }: ComponentProps<WeatherWidgetProps>) {
  const { location, dataPath } = element.props;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "var(--radius)",
        padding: "24px",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated clouds */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: -30,
          width: 100,
          height: 40,
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 40,
          right: -10,
          width: 80,
          height: 30,
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 16, marginBottom: 8, opacity: 0.9 }}>
          {location}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <div style={{ fontSize: 48, fontWeight: 600 }}>72°</div>
          <div>
            <div style={{ fontSize: 18, marginBottom: 4 }}>☀️</div>
            <div style={{ fontSize: 14, opacity: 0.9 }}>Partly Cloudy</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 13, opacity: 0.9 }}>
          <div>💨 8 mph</div>
          <div>💧 65%</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
