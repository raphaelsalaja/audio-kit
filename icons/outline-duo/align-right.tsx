import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignRight({
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
          d="M12.25 6.25V4.75C12.25 4.19772 11.8023 3.75 11.25 3.75L3.75 3.75C3.19771 3.75 2.75 4.19772 2.75 4.75V6.25C2.75 6.80228 3.19771 7.25 3.75 7.25H11.25C11.8023 7.25 12.25 6.80228 12.25 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.25 13.25V11.75C12.25 11.1977 11.8023 10.75 11.25 10.75H7.75C7.19772 10.75 6.75 11.1977 6.75 11.75V13.25C6.75 13.8023 7.19772 14.25 7.75 14.25H11.25C11.8023 14.25 12.25 13.8023 12.25 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 1.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 6.25V4.75C12.25 4.19772 11.8023 3.75 11.25 3.75L3.75 3.75C3.19771 3.75 2.75 4.19772 2.75 4.75V6.25C2.75 6.80228 3.19771 7.25 3.75 7.25H11.25C11.8023 7.25 12.25 6.80228 12.25 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 13.25V11.75C12.25 11.1977 11.8023 10.75 11.25 10.75H7.75C7.19772 10.75 6.75 11.1977 6.75 11.75V13.25C6.75 13.8023 7.19772 14.25 7.75 14.25H11.25C11.8023 14.25 12.25 13.8023 12.25 13.25Z"
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

export default AlignRight;
