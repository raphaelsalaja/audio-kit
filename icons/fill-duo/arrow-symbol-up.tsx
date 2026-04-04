import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowSymbolUp({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9 16C8.586 16 8.25 15.664 8.25 15.25V3C8.25 2.586 8.586 2.25 9 2.25C9.414 2.25 9.75 2.586 9.75 3V15.25C9.75 15.664 9.414 16 9 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.25 7.75C13.164 7.75 13.076 7.73499 12.99 7.70399C10.87 6.92199 9.66199 5.58399 8.99999 4.52299C8.33799 5.58399 7.12999 6.92099 5.00999 7.70399C4.61899 7.84599 4.18999 7.64799 4.04699 7.25999C3.90299 6.87099 4.10199 6.44 4.49099 6.297C7.55199 5.168 8.24699 2.668 8.27499 2.563C8.36199 2.234 8.66099 2.00301 9.00099 2.00301H9.00499C9.34699 2.00501 9.64499 2.235 9.72899 2.567C9.75599 2.669 10.451 5.168 13.512 6.297C13.901 6.441 14.099 6.87199 13.956 7.25999C13.844 7.56299 13.558 7.75 13.252 7.75H13.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowSymbolUp;
