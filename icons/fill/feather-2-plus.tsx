import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Feather2Plus({
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
          d="M5.5 2.5H4V1C4 0.586 3.664 0.25 3.25 0.25C2.836 0.25 2.5 0.586 2.5 1V2.5H1C0.586 2.5 0.25 2.836 0.25 3.25C0.25 3.664 0.586 4 1 4H2.5V5.5C2.5 5.914 2.836 6.25 3.25 6.25C3.664 6.25 4 5.914 4 5.5V4H5.5C5.914 4 6.25 3.664 6.25 3.25C6.25 2.836 5.914 2.5 5.5 2.5Z"
          fill={secondaryfill}
        />
        <path
          d="M15.846 2.90401C14.149 1.20701 11.387 1.20701 9.68999 2.90401L4.80599 7.78801C4.28599 8.30801 3.99999 8.99801 3.99999 9.73301V13.69L1.96999 15.72C1.67699 16.013 1.67699 16.488 1.96999 16.781C2.11599 16.927 2.30799 17.001 2.49999 17.001C2.69199 17.001 2.88399 16.928 3.02999 16.781L9.93719 9.87481L7.28119 14.751H9.01799C9.75199 14.751 10.443 14.465 10.962 13.945L15.846 9.06201C16.668 8.23901 17.121 7.14601 17.121 5.98301C17.121 4.82001 16.668 3.72701 15.846 2.90401Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Feather2Plus;
