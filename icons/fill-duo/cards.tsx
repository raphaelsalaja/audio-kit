import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cards({
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
          d="M2.75 1C1.78379 1 1 1.78379 1 2.75V11.25C1 12.2162 1.78379 13 2.75 13H9.25C10.2162 13 11 12.2162 11 11.25V2.75C11 1.78379 10.2162 1 9.25 1H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.87084 13H9.25001C10.2162 13 11 12.2162 11 11.25V3.95282L15.4727 5.12891C16.4071 5.37463 16.9658 6.33197 16.7201 7.26641L14.4289 15.9732C14.1832 16.9076 13.2258 17.4663 12.2914 17.2206L6.00509 15.5676C5.07064 15.3219 4.51194 14.3646 4.75766 13.4301L4.87084 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Cards;
