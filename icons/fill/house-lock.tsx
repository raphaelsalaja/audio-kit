import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseLock({
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
          d="M16.5 13.025V12.25C16.5 11.009 15.49 10 14.25 10C13.01 10 12 11.009 12 12.25V13.025C11.154 13.148 10.5 13.87 10.5 14.75V16.25C10.5 17.215 11.285 18 12.25 18H16.25C17.215 18 18 17.215 18 16.25V14.75C18 13.871 17.346 13.148 16.5 13.025ZM14.25 11.5C14.663 11.5 15 11.836 15 12.25V13H13.5V12.25C13.5 11.836 13.837 11.5 14.25 11.5Z"
          fill={secondaryfill}
        />
        <path
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V8.93348C15.4773 8.65675 14.8817 8.5 14.25 8.5C12.2611 8.5 10.6292 10.0541 10.5073 12.0143C9.60521 12.5871 9 13.5911 9 14.75V16.25C9 16.5081 9.03016 16.7592 9.08715 17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseLock;
