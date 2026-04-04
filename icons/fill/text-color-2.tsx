import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextColor2({
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
          d="M13.5 17C11.57 17 10 15.426 10 13.491C10 11.625 11.021 10.562 12.007 9.53299C12.311 9.21699 12.624 8.89099 12.916 8.52899C13.201 8.17499 13.799 8.17499 14.084 8.52899C14.376 8.89099 14.689 9.21699 14.993 9.53299C15.979 10.561 17 11.624 17 13.491C17 15.426 15.43 17 13.5 17Z"
          fill={secondaryfill}
        />
        <path
          d="M7.599 2C7.28946 2 7.01172 2.19017 6.89977 2.47875L2.05077 14.9788C1.90097 15.3649 2.09258 15.7994 2.47876 15.9492C2.86493 16.099 3.29943 15.9074 3.44924 15.5212L4.62124 12.5H7.97099C8.38521 12.5 8.72099 12.1642 8.72099 11.75C8.72099 11.3358 8.38521 11 7.97099 11H5.20312L7.99993 3.79023L9.71623 8.21669C9.86597 8.60289 10.3004 8.79458 10.6866 8.64484C11.0728 8.49509 11.2645 8.06063 11.1148 7.67443L9.10028 2.47887C8.98836 2.19022 8.71059 2 8.401 2H7.599Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextColor2;
