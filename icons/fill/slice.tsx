import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Slice({
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
          d="M10.7363 5.76368C11.0292 6.05657 11.0292 6.53144 10.7363 6.82434L3.05166 14.509C5.27414 14.3528 7.07655 13.562 8.24935 12.4414L8.24699 11.2995C8.24658 11.1001 8.32563 10.9087 8.46666 10.7677L9.76266 9.47167C10.0556 9.17877 10.5304 9.17877 10.8233 9.47167C11.1162 9.76456 11.1162 10.2394 10.8233 10.5323L9.74763 11.608L9.74999 12.7484C9.75039 12.9406 9.67702 13.1256 9.54501 13.2652C7.73169 15.1834 4.71006 16.2608 1.19408 15.9979C0.901703 15.9761 0.648874 15.7858 0.546857 15.511C0.444841 15.2361 0.512345 14.927 0.719661 14.7197L9.67566 5.76368C9.96855 5.47078 10.4434 5.47078 10.7363 5.76368Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M13.2537 2.18566C14.1676 1.27177 15.6504 1.27177 16.5643 2.18566C17.4782 3.09956 17.4782 4.58243 16.5643 5.49632L12.9863 9.07433C12.8457 9.21499 12.6549 9.294 12.456 9.294C12.2571 9.294 12.0663 9.21499 11.9257 9.07433L9.67566 6.82433C9.38277 6.53144 9.38277 6.05657 9.67566 5.76368L13.2537 2.18566Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Slice;
