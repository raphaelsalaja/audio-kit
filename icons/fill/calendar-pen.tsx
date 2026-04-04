import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarPen({
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
          d="M17.3653 10.7286L17.0299 10.3932C16.3697 9.73156 15.2169 9.73206 14.5548 10.3927L11.3936 13.5538C11.313 13.6344 11.252 13.732 11.2149 13.8394L10.294 16.5103C10.2002 16.7818 10.2696 17.0826 10.4727 17.2852C10.6158 17.4283 10.8072 17.5049 11.003 17.5049C11.085 17.5049 11.1676 17.4917 11.2476 17.4639L13.9185 16.543C14.0259 16.5059 14.1236 16.4449 14.2041 16.3643L17.3652 13.2032C17.6958 12.8726 17.8779 12.4332 17.8779 11.9659C17.8779 11.4981 17.6959 11.0587 17.3653 10.7286Z"
          fill={secondaryfill}
        />
        <path
          d="M5.75 3.5C5.336 3.5 5 3.164 5 2.75V0.75C5 0.336 5.336 0 5.75 0C6.164 0 6.5 0.336 6.5 0.75V2.75C6.5 3.164 6.164 3.5 5.75 3.5Z"
          fill={fill}
        />
        <path
          d="M12.25 3.5C11.836 3.5 11.5 3.164 11.5 2.75V0.75C11.5 0.336 11.836 0 12.25 0C12.664 0 13 0.336 13 0.75V2.75C13 3.164 12.664 3.5 12.25 3.5Z"
          fill={fill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H8.30656C8.72056 16 9.05656 15.664 9.05656 15.25C9.05656 14.836 8.72056 14.5 8.30656 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V7.509C15 7.923 15.336 8.259 15.75 8.259C16.164 8.259 16.5 7.923 16.5 7.509V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarPen;
