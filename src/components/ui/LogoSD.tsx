export const LogoSD = ({ width = 72, height = 45, className = "", variant = "light" }: { width?: number; height?: number; className?: string; variant?: "light" | "dark" }) => {
  const mainColor = variant === "light" ? "#ffffff" : "#0a1628";
  const accentColor = "#c9a96e";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sousa & Dias Advogados"
    >
      {/* S — elegant serif */}
      <text
        x="0"
        y="72"
        fontFamily="'Playfair Display', 'Georgia', serif"
        fontSize="82"
        fontWeight="400"
        fill={mainColor}
        letterSpacing="-0.03em"
      >
        S
      </text>

      {/* & — decorative ampersand, overlapping */}
      <text
        x="48"
        y="68"
        fontFamily="'Playfair Display', 'Georgia', serif"
        fontSize="58"
        fontWeight="400"
        fontStyle="italic"
        fill={accentColor}
        letterSpacing="-0.02em"
      >
        &amp;
      </text>

      {/* D — elegant serif, outline style */}
      <text
        x="95"
        y="72"
        fontFamily="'Playfair Display', 'Georgia', serif"
        fontSize="82"
        fontWeight="400"
        fill="none"
        stroke={mainColor}
        strokeWidth="1.2"
        letterSpacing="-0.03em"
      >
        D
      </text>
    </svg>
  );
};
