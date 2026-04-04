import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsTransaction({
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
          d="M9 12.25C10.7949 12.25 12.25 10.7949 12.25 9C12.25 7.20507 10.7949 5.75 9 5.75C7.20507 5.75 5.75 7.20507 5.75 9C5.75 10.7949 7.20507 12.25 9 12.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.561 4.99999H7.24999C7.66399 4.99999 7.99999 4.66399 7.99999 4.24999C7.99999 3.83599 7.66399 3.49999 7.24999 3.49999H3.561L4.781 2.27999C5.074 1.98699 5.074 1.51199 4.781 1.21899C4.488 0.925987 4.01299 0.925987 3.71999 1.21899L1.21999 3.71999C0.926994 4.01299 0.926994 4.488 1.21999 4.781L3.71999 7.281C3.86599 7.427 4.05799 7.501 4.24999 7.501C4.44199 7.501 4.63399 7.428 4.77999 7.281C5.07299 6.988 5.07299 6.51299 4.77999 6.21999L3.55999 4.99999H3.561Z"
          fill={fill}
        />
        <path
          d="M16.78 13.22L14.28 10.72C13.987 10.427 13.512 10.427 13.219 10.72C12.926 11.013 12.926 11.488 13.219 11.781L14.439 13.001H10.75C10.336 13.001 10 13.337 10 13.751C10 14.165 10.336 14.501 10.75 14.501H14.439L13.219 15.721C12.926 16.014 12.926 16.489 13.219 16.782C13.365 16.928 13.557 17.002 13.749 17.002C13.941 17.002 14.133 16.929 14.279 16.782L16.779 14.282C17.072 13.989 17.072 13.514 16.779 13.221L16.78 13.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsTransaction;
