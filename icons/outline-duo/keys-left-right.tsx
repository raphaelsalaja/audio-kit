import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KeysLeftRight({
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
          d="M6.25 5.25H2.25C1.42157 5.25 0.75 5.92157 0.75 6.75V11.25C0.75 12.0784 1.42157 12.75 2.25 12.75H6.25C7.07843 12.75 7.75 12.0784 7.75 11.25V6.75C7.75 5.92157 7.07843 5.25 6.25 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 5.25H2.25C1.42157 5.25 0.75 5.92157 0.75 6.75V11.25C0.75 12.0784 1.42157 12.75 2.25 12.75H6.25C7.07843 12.75 7.75 12.0784 7.75 11.25V6.75C7.75 5.92157 7.07843 5.25 6.25 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 5.25H11.75C10.9216 5.25 10.25 5.92157 10.25 6.75V11.25C10.25 12.0784 10.9216 12.75 11.75 12.75H15.75C16.5784 12.75 17.25 12.0784 17.25 11.25V6.75C17.25 5.92157 16.5784 5.25 15.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 5.25H11.75C10.9216 5.25 10.25 5.92157 10.25 6.75V11.25C10.25 12.0784 10.9216 12.75 11.75 12.75H15.75C16.5784 12.75 17.25 12.0784 17.25 11.25V6.75C17.25 5.92157 16.5784 5.25 15.75 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 1.25C12.75 2.078 12.078 2.75 11.25 2.75H6.75C5.922 2.75 5.25 2.078 5.25 1.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 16.75C12.75 15.922 12.078 15.25 11.25 15.25H6.75C5.922 15.25 5.25 15.922 5.25 16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 7.75L3.25 9L4.5 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 7.75L14.75 9L13.5 10.25"
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

export default KeysLeftRight;
