import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardPen({
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
          d="M1 5.75C1 4.23203 2.23054 3 3.75 3H14.25C15.7695 3 17 4.23203 17 5.75V6.5H1V5.75Z"
          fill={fill}
        />
        <path
          d="M17.1114 10.2247L16.776 9.88925C16.1158 9.22765 14.963 9.22815 14.3009 9.88875L11.1397 13.0499C11.0591 13.1305 10.9981 13.2281 10.961 13.3355L10.0401 16.0064C9.94626 16.2779 10.0157 16.5787 10.2188 16.7813C10.3619 16.9244 10.5533 17.001 10.7491 17.001C10.8311 17.001 10.9137 16.9878 10.9937 16.96L13.6646 16.0391C13.772 16.002 13.8697 15.941 13.9502 15.8604L17.1113 12.6993C17.4419 12.3687 17.624 11.9293 17.624 11.462C17.624 10.9942 17.442 10.5548 17.1114 10.2247Z"
          fill={secondaryfill}
        />
        <path
          d="M13.2414 8.82689L10.079 11.9892C9.83761 12.2306 9.65423 12.5243 9.54291 12.8465L8.80041 15H3.75C2.23054 15 1 13.768 1 12.25V8L14.6986 8C14.1605 8.13942 13.654 8.41522 13.2414 8.82689ZM3.5 11.25C3.5 10.8358 3.83579 10.5 4.25 10.5H7.25C7.66421 10.5 8 10.8358 8 11.25C8 11.6642 7.66421 12 7.25 12H4.25C3.83579 12 3.5 11.6642 3.5 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CreditCardPen;
