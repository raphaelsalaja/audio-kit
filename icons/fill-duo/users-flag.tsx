import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersFlag({
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
          d="M12.25 10.0005C11.5597 10.0005 11 10.5602 11 11.2505V13.2505V17.2505C11 17.6647 11.3358 18.0005 11.75 18.0005C12.1642 18.0005 12.5 17.6647 12.5 17.2505V14.5005H15.75C16.4403 14.5005 17 13.9408 17 13.2505V11.2505C17 10.5602 16.4403 10.0005 15.75 10.0005H12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.0799 9.56118C9.7165 10.0273 9.5 10.6136 9.5 11.2505V15.7582C8.75151 15.9045 7.91345 16.0005 7.00006 16.0005C5.26806 16.0005 3.80718 15.6556 2.71404 15.276C1.47808 14.8468 0.805437 13.4059 1.42477 12.181C2.45327 10.1468 4.56099 8.74951 7.00006 8.74951C8.12088 8.74951 9.17167 9.04477 10.0799 9.56118Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 4.75049C4.25 3.2313 5.48133 2.00049 7 2.00049C8.51867 2.00049 9.75 3.2313 9.75 4.75049C9.75 6.26968 8.51867 7.50049 7 7.50049C5.48133 7.50049 4.25 6.26968 4.25 4.75049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.5503 7.08782C10.9712 7.34943 11.468 7.50049 12 7.50049C13.5187 7.50049 14.75 6.26968 14.75 4.75049C14.75 3.2313 13.5187 2.00049 12 2.00049C11.468 2.00049 10.9712 2.15155 10.5503 2.41315C10.9926 3.08366 11.25 3.88692 11.25 4.75049C11.25 5.61405 10.9926 6.41732 10.5503 7.08782Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default UsersFlag;
