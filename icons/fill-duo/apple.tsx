import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Apple({
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
          d="M14.431 4.81801C13.048 3.71901 11.554 4.01501 10.355 4.25201C9.422 4.43701 8.702 4.43901 7.796 4.24101C6.64 3.98901 5.205 3.67601 3.696 4.80501C1.512 6.43801 1.442 10.305 3.537 13.607C5.331 16.437 7.293 16.072 8.465 15.856C8.926 15.77 9.188 15.771 9.648 15.856C10.003 15.922 10.431 16.002 10.904 16.002C11.994 16.002 13.326 15.581 14.577 13.607C16.733 10.203 16.231 6.24401 14.431 4.81801Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5 0.25C11.776 0.25 12 0.474 12 0.75C12 2.13 10.88 3.25 9.5 3.25C9.224 3.25 9 3.026 9 2.75C9 1.37 10.12 0.25 11.5 0.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Apple;
