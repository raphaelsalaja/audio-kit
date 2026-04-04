import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Handshake({
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
          d="M0 6.25C0 5.69772 0.447715 5.25 1 5.25H1.744C2.29629 5.25 2.744 5.69772 2.744 6.25V12.25C2.744 12.8023 2.29629 13.25 1.744 13.25H1C0.447715 13.25 0 12.8023 0 12.25V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.258 6.25C15.258 5.69772 15.7057 5.25 16.258 5.25H17.002C17.5543 5.25 18.002 5.69772 18.002 6.25V12.25C18.002 12.8023 17.5543 13.25 17.002 13.25H16.258C15.7057 13.25 15.258 12.8023 15.258 12.25V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.345 11.75H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.779 4.66999L8.548 4.35699C8.265 3.97499 7.818 3.74899 7.342 3.74899H5.884C5.496 3.74899 5.123 3.89999 4.843 4.16899L2.976 5.96899C2.906 6.03599 2.828 6.09199 2.744 6.13599"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 11.75H4.01C4.313 11.75 4.6 11.888 4.79 12.124L5.873 13.473C6.469 14.215 7.505 14.435 8.351 13.998L11.625 12.305C12.736 11.731 13.053 10.289 12.286 9.30199L10.638 7.17999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.258 6.138C15.173 6.094 15.095 6.038 15.025 5.97L13.158 4.17C12.878 3.901 12.505 3.75 12.117 3.75H10.31C9.906 3.75 9.519 3.913 9.236 4.203L6.741 6.761C6.243 7.271 6.248 8.087 6.752 8.591C7.199 9.038 7.902 9.099 8.42 8.736L11.25 6.751"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 5.25H1.75C2.302 5.25 2.75 5.698 2.75 6.25V12.25C2.75 12.802 2.302 13.25 1.75 13.25H0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 5.25H16.25C15.698 5.25 15.25 5.698 15.25 6.25V12.25C15.25 12.802 15.698 13.25 16.25 13.25H17.25"
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

export default Handshake;
