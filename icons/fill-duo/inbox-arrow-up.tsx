import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InboxArrowUp({
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
          d="M3.30295 3.74372C3.71678 2.69059 4.7328 1.99899 5.86299 1.99899H12.136C13.2678 1.99899 14.2823 2.69219 14.6959 3.74341L16.809 9.12278C16.8897 9.32885 17 9.77524 17 10L17.0001 13C17.0001 13.2004 16.92 13.3924 16.7775 13.5333C16.635 13.6742 16.442 13.7522 16.2417 13.75L1.73977 13.5863C1.32889 13.5817 0.998238 13.2473 0.998237 12.8363V10C0.998236 9.77474 1.10867 9.32826 1.19018 9.12212L3.30295 3.74372Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.54921 3.22301C9.40887 3.0809 9.21764 3.00063 9.01792 3C8.81819 2.99938 8.62646 3.07844 8.48523 3.21967L5.98523 5.71967C5.69234 6.01256 5.69234 6.48744 5.98523 6.78033C6.27813 7.07322 6.753 7.07322 7.04589 6.78033L8.25 5.57622V9C8.25 9.41421 8.58579 9.75 9 9.75C9.41421 9.75 9.75 9.41421 9.75 9V5.5611L10.9507 6.77699C11.2418 7.07172 11.7166 7.0747 12.0114 6.78365C12.3061 6.4926 12.3091 6.01774 12.018 5.72301L9.54921 3.22301Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 10L5.75 10C6.16421 10 6.5 10.3358 6.5 10.75V11.75C6.5 11.8878 6.61221 12 6.75 12H11.25C11.3878 12 11.5 11.8878 11.5 11.75V10.75C11.5 10.3358 11.8358 10 12.25 10H17V13.25C17 14.768 15.7695 16 14.25 16H3.75C2.23054 16 1 14.768 1 13.25V10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default InboxArrowUp;
