import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder3({
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
          d="M1.5 3.75C1.5 2.7838 2.2838 2 3.25 2H5.946C6.5504 2 7.11 2.3119 7.4295 2.8217L8.1657 4H13.75C14.7162 4 15.5 4.7838 15.5 5.75V14.5C15.5 14.9142 15.1642 15.25 14.75 15.25H2.3528L1.6346 14.1249L1.5313 13.793C1.5105 13.683 1.5001 13.5713 1.5001 13.4594L1.5 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.5 13.5061C1.5033 14.8835 2.6218 16 4 16H13.75C13.9399 16 14.1253 15.9808 14.3043 15.9441C15.5577 15.6878 16.5 14.5793 16.5 13.25V9.25C16.5 8.5522 16.0911 7.9495 15.5 7.6685C15.2727 7.5605 15.0184 7.5 14.75 7.5H5.75C4.7838 7.5 4 8.2838 4 9.25V10.8324C4 10.8887 3.9983 10.9446 3.9948 11H4V13.5C4 14.1904 3.4404 14.75 2.75 14.75C2.0617 14.75 1.6118 14.3373 1.5 13.5061Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Folder3;
