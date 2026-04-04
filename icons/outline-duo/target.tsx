import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Target({
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
          d="M9 9L12.25 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 5.75L11.5 3.5L14 1L14.75 3.25L17 4L14.5 6.5L12.25 5.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M12.25 5.75L11.5 3.5L14 1L14.75 3.25L17 4L14.5 6.5L12.25 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.8279 8.31689C15.445 8.59829 14.9842 8.75 14.5 8.75C14.2578 8.75 14.0186 8.71087 13.7886 8.63427L13.5039 8.53943L13.2149 8.62817C13.2403 8.81587 13.25 8.805 13.25 9C13.25 11.3469 11.3472 13.25 8.99998 13.25C6.65278 13.25 4.74998 11.3469 4.74998 9C4.74998 6.6531 6.65278 4.75 8.99998 4.75C9.18968 4.75 9.16978 4.73267 9.35288 4.75677L9.45618 4.48321L9.36558 4.21142C9.13578 3.52282 9.24988 2.7848 9.65828 2.2066C9.73228 2.1018 9.64698 1.75 9.64698 1.75C9.32148 1.7051 9.33768 1.75 8.99988 1.75C4.99588 1.75 1.74988 4.9961 1.74988 9C1.74988 13.0039 4.99588 16.25 8.99988 16.25C13.0039 16.25 16.2499 13.0039 16.2499 9C16.2499 8.6621 16.2681 8.60388 16.2234 8.27838C16.2234 8.27838 15.9203 8.24899 15.8279 8.31689Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M8.757 4.75677C6.5231 4.88277 4.75 6.7346 4.75 9C4.75 11.3469 6.653 13.25 9 13.25C11.2653 13.25 13.1171 11.477 13.2432 9.24323"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.0633 1.75031C9.0422 1.75011 9.0212 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 13.0039 4.996 16.25 9 16.25C13.004 16.25 16.25 13.0039 16.25 9C16.25 8.9788 16.2499 8.95772 16.2497 8.93652"
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

export default Target;
