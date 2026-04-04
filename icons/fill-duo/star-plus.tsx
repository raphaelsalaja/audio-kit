import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarPlus({
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
          d="M8.5 13.25C8.5 12.0093 9.5093 11 10.75 11H11V10.75C11 9.5093 12.0093 8.5 13.25 8.5C13.9423 8.5 14.5547 8.82079 14.9678 9.31419L16.7735 7.5542C16.9776 7.355 17.0518 7.0566 16.963 6.7852C16.8751 6.5137 16.6407 6.316 16.3575 6.2749L11.7384 5.6035L9.673 1.418C9.4191 0.9063 8.5812 0.9063 8.3273 1.418L6.2619 5.6035L1.6428 6.2749C1.3596 6.3159 1.1252 6.5137 1.0373 6.7852C0.9484 7.0567 1.0227 7.355 1.2268 7.5542L4.5696 10.8125L3.7796 15.4131C3.7317 15.6943 3.847 15.979 4.0775 16.147C4.308 16.314 4.6146 16.3365 4.8675 16.2041L8.7099 14.1848C8.5784 13.8992 8.5 13.5845 8.5 13.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.75 12.5H14V10.75C14 10.3359 13.6641 10 13.25 10C12.8359 10 12.5 10.3359 12.5 10.75V12.5H10.75C10.3359 12.5 10 12.8359 10 13.25C10 13.6641 10.3359 14 10.75 14H12.5V15.75C12.5 16.1641 12.8359 16.5 13.25 16.5C13.6641 16.5 14 16.1641 14 15.75V14H15.75C16.1641 14 16.5 13.6641 16.5 13.25C16.5 12.8359 16.1641 12.5 15.75 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StarPlus;
