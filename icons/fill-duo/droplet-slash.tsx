import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DropletSlash({
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
          d="M12.9835 5.01659C12.5007 4.44359 11.9788 3.89229 11.4444 3.33539C10.8204 2.68549 10.1758 2.01359 9.58401 1.27919C9.29881 0.925694 8.70119 0.925694 8.41599 1.27919C7.82419 2.01359 7.1797 2.68539 6.5556 3.33539C4.5986 5.37499 2.74991 7.30119 2.74991 10.7329C2.74991 12.0149 3.13721 13.2073 3.79861 14.2012L12.9835 5.01659Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.36261 15.8191C6.38861 16.5591 7.64259 17 9.00009 17C12.4464 17 15.2501 14.1885 15.2501 10.7329C15.2501 9.1987 14.8681 7.9744 14.2846 6.8972L5.36261 15.8191Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M1.99999 16.75C1.80759 16.75 1.61619 16.6768 1.46969 16.5303C1.17669 16.2373 1.17669 15.7627 1.46969 15.4698L15.4697 1.4698C15.7627 1.1768 16.2373 1.1768 16.5302 1.4698C16.8231 1.7628 16.8232 2.2374 16.5302 2.5303L2.53021 16.5303C2.38371 16.6768 2.19239 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DropletSlash;
