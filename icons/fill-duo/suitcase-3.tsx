import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Suitcase3({
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
          d="M3.75 4C2.23079 4 1 5.23079 1 6.75V13.25C1 14.7692 2.23079 16 3.75 16H14.25C15.7692 16 17 14.7692 17 13.25V6.75C17 5.23079 15.7692 4 14.25 4H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M17 9.22612V7.5686L15.9413 8.06637C14.6877 8.60881 12.5289 9.36741 9.75 9.48688V9.25C9.75 8.83579 9.41421 8.5 9 8.5C8.58579 8.5 8.25 8.83579 8.25 9.25V9.48689C5.46981 9.36737 3.31028 8.60813 2.05696 8.06563L1 7.57505V9.22875L1.45168 9.43812C2.82143 10.0319 5.19318 10.8672 8.25 10.9882V11.5C8.25 11.9142 8.58579 12.25 9 12.25C9.41421 12.25 9.75 11.9142 9.75 11.5V10.9882C12.8068 10.8672 15.1785 10.0319 16.5483 9.43812C16.7007 9.37206 16.8497 9.2968 17 9.22612Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Suitcase3;
