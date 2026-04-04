import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarSlash({
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
          d="M4.56931 10.8125L4.02651 13.9736L12.3129 5.687L11.7383 5.6035L9.6729 1.418C9.419 0.9063 8.5811 0.9063 8.3272 1.418L6.2618 5.6035L1.64271 6.2749C1.35951 6.3159 1.12511 6.5137 1.03721 6.7852C0.948308 7.0567 1.02261 7.355 1.22671 7.5542L4.56931 10.8125Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.3574 6.2749L15.0908 6.09081L5.0997 16.082L9 14.0322L13.1328 16.2041C13.2422 16.2617 13.3623 16.29 13.4814 16.29C13.6367 16.29 13.7919 16.2417 13.9228 16.1469C14.1533 15.9789 14.2685 15.6943 14.2207 15.413L13.4307 10.8124L16.7735 7.55409C16.9776 7.35489 17.0518 7.0565 16.963 6.7851C16.8751 6.5136 16.6406 6.316 16.3574 6.2749Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M1.99999 16.75C1.80809 16.75 1.61619 16.6768 1.46969 16.5303C1.17669 16.2373 1.17669 15.7627 1.46969 15.4698L15.4697 1.4698C15.7627 1.1768 16.2373 1.1768 16.5302 1.4698C16.8231 1.7628 16.8232 2.2374 16.5302 2.5303L2.53019 16.5303C2.38369 16.6768 2.19189 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StarSlash;
