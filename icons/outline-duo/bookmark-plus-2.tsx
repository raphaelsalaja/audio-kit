import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkPlus2({
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
          d="m9,12.75l5,3.5.25-3.2461-.25-.0176c-1.125-.1244-2-1.0782-2-2.2363v-.25h-.25c-1.2426,0-2.25-1.0074-2.25-2.25s1.0074-2.25,2.25-2.25h.25v-.25c0-1.1535.868-2.1042,1.9864-2.2347-.1161-.9943-.9608-1.7653-1.9864-1.7653h-6.25c-1.105,0-2,.895-2,2v12.5l5.25-3.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m14.25,5.75v5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.75,8.25h-5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.9812,2.7747c-.3414-.6089-.9835-1.0247-1.7312-1.0247h-6.5c-1.105,0-2,.896-2,2v12.5l5.25-3.5,5.25,3.5v-2.5"
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

export default BookmarkPlus2;
