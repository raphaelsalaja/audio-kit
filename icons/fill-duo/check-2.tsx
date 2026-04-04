import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Check2({
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
          d="M6.5001 14C6.3077 14 6.1163 13.9268 5.9698 13.7803L2.21981 10.0303C1.92681 9.7373 1.92681 9.2627 2.21981 8.9698C2.51281 8.6769 2.98741 8.6768 3.28031 8.9698L6.50001 12.1895L14.7197 3.9698C15.0127 3.6768 15.4873 3.6768 15.7802 3.9698C16.0731 4.2628 16.0732 4.7374 15.7802 5.0303L7.03022 13.7803C6.88372 13.9268 6.6925 14 6.5001 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Check2;
