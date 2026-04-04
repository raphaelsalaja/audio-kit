import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Suitcase2({
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
          d="M17 9.22612C16.8497 9.2968 16.7007 9.37206 16.5483 9.43812C15.0685 10.0796 12.4191 11.003 8.99997 11.003C5.5808 11.003 2.93149 10.0796 1.45168 9.43812L1 9.22875V7.57505L2.05696 8.06563C3.42083 8.65598 5.85783 9.50299 8.99997 9.50299C12.1408 9.50299 14.5771 8.65668 15.9413 8.06637L17 7.5686V9.22612Z"
          fill={fill}
          opacity="0.88"
        />
      </g>
    </svg>
  );
}

export default Suitcase2;
