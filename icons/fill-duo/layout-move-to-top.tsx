import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutMoveToTop({
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
          d="M14.2501 2H3.75012C2.23134 2 1.00012 3.23122 1.00012 4.75V13.25C1.00012 14.7688 2.23134 16 3.75012 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.2501 5H4.75012C4.33602 5 4.00012 5.3359 4.00012 5.75C4.00012 6.1641 4.33602 6.5 4.75012 6.5H13.2501C13.6642 6.5 14.0001 6.1641 14.0001 5.75C14.0001 5.3359 13.6642 5 13.2501 5Z"
          fill={fill}
        />
        <path
          d="M9.53037 7.96975C9.23737 7.67675 8.76277 7.67675 8.46987 7.96975L6.34878 10.0908C6.05578 10.3838 6.05578 10.8584 6.34878 11.1513C6.64178 11.4442 7.11638 11.4443 7.40928 11.1513L8.25008 10.3105V12.5C8.25008 12.9141 8.58598 13.25 9.00008 13.25C9.41418 13.25 9.75008 12.9141 9.75008 12.5V10.3105L10.5909 11.1513C10.7374 11.2978 10.9288 11.371 11.1212 11.371C11.3136 11.371 11.505 11.2978 11.6515 11.1513C11.9445 10.8583 11.9445 10.3837 11.6515 10.0908L9.53037 7.96975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LayoutMoveToTop;
