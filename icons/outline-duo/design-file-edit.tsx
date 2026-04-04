import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFileEdit({
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
          d="M13.7959 16.4542L16.9571 13.293C17.3476 12.9025 17.3476 12.2693 16.9571 11.8788L16.3713 11.293C15.9808 10.9025 15.3476 10.9025 14.9571 11.293L11.7959 14.4542L11.0001 17.2501L13.7959 16.4542Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.5219 8.95665C14.1004 9.11455 13.7051 9.36301 13.3661 9.70201L10.2049 12.8632C9.934 13.1341 9.73675 13.4697 9.63186 13.8382L8.88709 16.4549L3.75 16.25C2.645 16.25 1.75 15.355 1.75 14.25V3.75C1.75 2.645 2.645 1.75 3.75 1.75H9.336C9.601 1.75 9.856 1.855 10.043 2.043L13.957 5.957C14.145 6.145 14.25 6.399 14.25 6.664L14.5219 8.95665Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.5 10C11.6046 10 12.5 9.10457 12.5 8C12.5 6.89543 11.6046 6 10.5 6C9.39543 6 8.5 6.89543 8.5 8C8.5 9.10457 9.39543 10 10.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.6 10H5.9C5.40294 10 5 10.4029 5 10.9V12.6C5 13.0971 5.40294 13.5 5.9 13.5H7.6C8.09706 13.5 8.5 13.0971 8.5 12.6V10.9C8.5 10.4029 8.09706 10 7.6 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.402 7.648C7.526 7.431 7.525 7.162 7.399 6.947L6.069 4.667C5.818 4.237 5.11 4.239 4.861 4.667L3.531 6.946C3.405 7.162 3.403 7.43 3.528 7.648C3.652 7.865 3.885 8 4.135 8H6.794C7.044 8 7.278 7.865 7.402 7.648Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 8.26682V6.664C14.25 6.3989 14.145 6.145 13.957 5.957L10.043 2.04291C9.856 1.85491 9.601 1.74991 9.336 1.74991H3.75C2.645 1.74991 1.75 2.64491 1.75 3.74991V14.2499C1.75 15.3549 2.645 16.2499 3.75 16.2499H8.16521"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 16.4542L16.9571 13.293C17.3476 12.9025 17.3476 12.2693 16.9571 11.8788L16.3713 11.293C15.9808 10.9025 15.3476 10.9025 14.9571 11.293L11.7959 14.4542L11.0001 17.2501L13.7959 16.4542Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DesignFileEdit;
