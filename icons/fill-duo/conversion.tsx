import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Conversion({
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
          d="M15.25 10H2.74999C2.44599 10 2.173 10.183 2.057 10.463C1.942 10.743 2.00499 11.066 2.21999 11.28L6.71999 15.78C6.86599 15.926 7.05799 16 7.24999 16C7.44199 16 7.63399 15.927 7.77999 15.78C8.07299 15.487 8.07299 15.012 7.77999 14.719L4.55999 11.499H15.25C15.664 11.499 16 11.163 16 10.749C16 10.335 15.664 10 15.25 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 8.00002H15.25C15.554 8.00002 15.827 7.81701 15.943 7.53701C16.058 7.25701 15.995 6.93399 15.78 6.71999L11.28 2.21999C10.987 1.92699 10.512 1.92699 10.219 2.21999C9.92599 2.51299 9.92599 2.98803 10.219 3.28103L13.439 6.501H2.75C2.336 6.501 2 6.837 2 7.251C2 7.665 2.336 8.00002 2.75 8.00002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Conversion;
