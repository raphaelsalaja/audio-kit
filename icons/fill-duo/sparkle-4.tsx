import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sparkle4({
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
          d="M9.00007 1.5C9.30783 1.50003 9.58435 1.68808 9.69748 1.97429L11.49 6.50903L16.0258 8.30255C16.312 8.41571 16.5 8.69224 16.5 9C16.5 9.30776 16.312 9.58429 16.0258 9.69746L11.49 11.4909L9.69749 16.0257C9.58435 16.3119 9.30783 16.5 9.00007 16.5C8.6923 16.5 8.41575 16.312 8.30256 16.0258L6.50906 11.491L1.97417 9.69744C1.68799 9.58426 1.5 9.30774 1.5 9C1.5 8.69226 1.68799 8.41575 1.97417 8.30256L6.50906 6.50903L8.30256 1.97417C8.41575 1.68797 8.6923 1.49997 9.00007 1.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Sparkle4;
