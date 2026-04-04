import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpeningQuotationMark({
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
          d="M6.25012 15H2.75012C1.78532 15 1.00012 14.2148 1.00012 13.25V9.24998C1.00012 5.39398 2.26384 3.10636 4.97864 2.05076C5.36144 1.90186 5.79894 2.09231 5.94934 2.47801C6.09974 2.86421 5.90834 3.2988 5.52164 3.4492C4.20524 3.9614 2.70522 5.00488 2.51962 8.49998H6.25012C7.21492 8.49998 8.00012 9.28518 8.00012 10.25V13.25C8.00012 14.2148 7.21492 15 6.25012 15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.2501 15H11.7501C10.7853 15 10.0001 14.2148 10.0001 13.25V9.24998C10.0001 5.39398 11.2638 3.10636 13.9786 2.05076C14.3604 1.90186 14.7999 2.09231 14.9493 2.47801C15.0997 2.86421 14.9083 3.2988 14.5216 3.4492C13.2052 3.9614 11.7052 5.00488 11.5196 8.49998H15.2501C16.2149 8.49998 17.0001 9.28518 17.0001 10.25V13.25C17.0001 14.2148 16.2149 15 15.2501 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OpeningQuotationMark;
