import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Axis2({
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
          d="M16.224 15.168L9.75 9.89401V2.25H8.25V9.89401L1.776 15.168L2.724 16.332L9 11.218L15.276 16.332L16.224 15.168Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75 16.5H2.25C1.836 16.5 1.5 16.164 1.5 15.75V12.25C1.5 11.836 1.836 11.5 2.25 11.5C2.664 11.5 3 11.836 3 12.25V15H5.75C6.164 15 6.5 15.336 6.5 15.75C6.5 16.164 6.164 16.5 5.75 16.5Z"
          fill={fill}
        />
        <path
          d="M15.75 16.5H12.25C11.836 16.5 11.5 16.164 11.5 15.75C11.5 15.336 11.836 15 12.25 15H15V12.25C15 11.836 15.336 11.5 15.75 11.5C16.164 11.5 16.5 11.836 16.5 12.25V15.75C16.5 16.164 16.164 16.5 15.75 16.5Z"
          fill={fill}
        />
        <path
          d="M11.475 5.48699C11.283 5.48699 11.091 5.41399 10.945 5.26699L8.99999 3.32299L7.05499 5.26699C6.76199 5.55999 6.28698 5.55999 5.99398 5.26699C5.70098 4.97399 5.70098 4.49899 5.99398 4.20599L8.46899 1.73098C8.76199 1.43798 9.23699 1.43798 9.52999 1.73098L12.005 4.20599C12.298 4.49899 12.298 4.97399 12.005 5.26699C11.859 5.41299 11.667 5.48699 11.475 5.48699Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Axis2;
