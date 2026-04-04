import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarHalf({
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
          d="M13.4814 16.29C13.3623 16.29 13.2421 16.2617 13.1328 16.2041L8.99999 14.0322L4.86718 16.2041C4.61428 16.3364 4.3076 16.314 4.0772 16.147C3.8467 15.979 3.73149 15.6944 3.77929 15.4131L4.5693 10.8125L1.2265 7.5542C1.0224 7.355 0.948197 7.0566 1.037 6.7852C1.1249 6.5137 1.3593 6.316 1.6425 6.2749L6.26159 5.6035L8.32699 1.418C8.58089 0.9063 9.41879 0.9063 9.67269 1.418L11.7381 5.6035L16.3572 6.2749C16.6404 6.3159 16.8748 6.5137 16.9627 6.7852C17.0516 7.0567 16.9773 7.355 16.7732 7.5542L13.4304 10.8125L14.2204 15.4131C14.2683 15.6943 14.153 15.979 13.9225 16.147C13.7916 16.2417 13.6367 16.29 13.4814 16.29Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00001 1.03419C8.72711 1.03419 8.45409 1.1621 8.32709 1.418L6.2617 5.6035L1.6426 6.2749C1.3594 6.3159 1.125 6.5137 1.0371 6.7852C0.948201 7.0567 1.0225 7.355 1.2266 7.5542L4.5694 10.8125L3.77941 15.4131C3.73151 15.6943 3.84681 15.979 4.07731 16.147C4.30781 16.314 4.61442 16.3365 4.86732 16.2041L9.0001 14.0322L9.00001 1.03419Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StarHalf;
