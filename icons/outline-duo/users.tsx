import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users({
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
          d="M16.494 11.3635C16.688 11.8785 16.381 12.4475 15.858 12.6225C14.9814 12.9153 13.8077 13.1965 12.4107 13.2436C12.3924 13.1857 12.3724 13.1278 12.3506 13.0698C11.7793 11.5536 10.6789 10.2859 9.2969 9.47266C8.65208 9.09318 11.7223 8.25153 12 8.25153C14.058 8.25153 15.809 9.54552 16.494 11.3635Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12 5.75C13.1046 5.75 14 4.85457 14 3.75C14 2.64543 13.1046 1.75 12 1.75C10.8954 1.75 10 2.64543 10 3.75C10 4.85457 10.8954 5.75 12 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 8.25C6.85457 8.25 7.75 7.35457 7.75 6.25C7.75 5.14543 6.85457 4.25 5.75 4.25C4.64543 4.25 3.75 5.14543 3.75 6.25C3.75 7.35457 4.64543 8.25 5.75 8.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.60903 15.122C10.132 14.947 10.439 14.378 10.245 13.863C9.56003 12.045 7.80903 10.751 5.75103 10.751C3.69303 10.751 1.94203 12.045 1.25703 13.863C1.06303 14.379 1.37003 14.948 1.89303 15.122C2.85503 15.443 4.17403 15.75 5.75203 15.75C7.33003 15.75 8.64803 15.443 9.60903 15.122Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 5.75C13.1046 5.75 14 4.85457 14 3.75C14 2.64543 13.1046 1.75 12 1.75C10.8954 1.75 10 2.64543 10 3.75C10 4.85457 10.8954 5.75 12 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.154 13.1873C14.2224 13.0845 15.1437 12.8614 15.858 12.6226C16.381 12.4476 16.688 11.8785 16.494 11.3636C15.809 9.54552 14.058 8.25153 12 8.25153C11.1608 8.25153 10.379 8.47713 9.69287 8.85553"
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

export default Users;
