import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonDoor({
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
          d="M6.5 4.75C7.32843 4.75 8 4.07843 8 3.25C8 2.42157 7.32843 1.75 6.5 1.75C5.67157 1.75 5 2.42157 5 3.25C5 4.07843 5.67157 4.75 6.5 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.75 1.75H14.25C15.355 1.75 16.25 2.645 16.25 3.75V14.25C16.25 15.355 15.355 16.25 14.25 16.25H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 4.75C7.32843 4.75 8 4.07843 8 3.25C8 2.42157 7.32843 1.75 6.5 1.75C5.67157 1.75 5 2.42157 5 3.25C5 4.07843 5.67157 4.75 6.5 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 16.25L5.592 7.361C5.671 6.981 6.133 6.832 6.419 7.094L7.969 8.513C8.286 8.804 8.754 8.859 9.13 8.65L10.75 7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.26402 7.918L2.88502 8.084C2.63802 8.192 2.44502 8.396 2.35002 8.649L1.74902 10.251"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.96802 11.631L7.60502 12.013C7.85602 12.164 8.02902 12.417 8.07702 12.706L8.50102 15.25"
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

export default PersonDoor;
