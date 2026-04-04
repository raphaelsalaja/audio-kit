import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Books2({
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
          d="M5.75 7.25V14.25C5.75 14.8023 6.19772 15.25 6.75 15.25H8.75C9.30228 15.25 9.75 14.8023 9.75 14.25V7.25H5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 8.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H4.75C5.30228 15.25 5.75 14.8023 5.75 14.25V8.75H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.9323 9.26803L14.2747 8.22968L15.9219 13.5039C16.0865 14.031 15.7926 14.5919 15.2654 14.7565L13.8336 15.2037C13.3065 15.3683 12.7456 15.0744 12.581 14.5472L10.9323 9.26803Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.75 2.75H6.75C6.19772 2.75 5.75 3.19772 5.75 3.75V14.25C5.75 14.8023 6.19772 15.25 6.75 15.25H8.75C9.30228 15.25 9.75 14.8023 9.75 14.25V3.75C9.75 3.19772 9.30228 2.75 8.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 4.75H3.75C3.19772 4.75 2.75 5.19772 2.75 5.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H4.75C5.30228 15.25 5.75 14.8023 5.75 14.25V5.75C5.75 5.19772 5.30228 4.75 4.75 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.1353 4.73392L10.7035 5.18108C10.1763 5.34572 9.88243 5.90655 10.0471 6.43372L12.581 14.5472C12.7456 15.0744 13.3065 15.3683 13.8336 15.2037L15.2654 14.7565C15.7926 14.5919 16.0865 14.031 15.9219 13.5039L13.3879 5.39034C13.2233 4.86317 12.6625 4.56928 12.1353 4.73392Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.934 9.272L14.275 8.228"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 7.25H9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 8.75H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1 15.25H17"
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

export default Books2;
