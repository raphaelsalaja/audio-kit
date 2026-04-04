import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KeysUpDown({
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
          d="M12.75 6.25V2.25C12.75 1.42157 12.0784 0.75 11.25 0.75L6.75 0.75C5.92157 0.75 5.25 1.42157 5.25 2.25V6.25C5.25 7.07843 5.92157 7.75 6.75 7.75H11.25C12.0784 7.75 12.75 7.07843 12.75 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 6.25V2.25C12.75 1.42157 12.0784 0.75 11.25 0.75L6.75 0.75C5.92157 0.75 5.25 1.42157 5.25 2.25V6.25C5.25 7.07843 5.92157 7.75 6.75 7.75H11.25C12.0784 7.75 12.75 7.07843 12.75 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 15.75V11.75C12.75 10.9216 12.0784 10.25 11.25 10.25H6.75C5.92157 10.25 5.25 10.9216 5.25 11.75V15.75C5.25 16.5784 5.92157 17.25 6.75 17.25H11.25C12.0784 17.25 12.75 16.5784 12.75 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 15.75V11.75C12.75 10.9216 12.0784 10.25 11.25 10.25H6.75C5.92157 10.25 5.25 10.9216 5.25 11.75V15.75C5.25 16.5784 5.92157 17.25 6.75 17.25H11.25C12.0784 17.25 12.75 16.5784 12.75 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 12.75C15.922 12.75 15.25 12.078 15.25 11.25V6.75C15.25 5.922 15.922 5.25 16.75 5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 12.75C2.078 12.75 2.75 12.078 2.75 11.25V6.75C2.75 5.922 2.078 5.25 1.25 5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 4.5L9 3.25L7.75 4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 13.5L9 14.75L7.75 13.5"
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

export default KeysUpDown;
