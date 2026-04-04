import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldDown({
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
          d="M3.609 9.552L8.602 16.133C8.802 16.397 9.199 16.397 9.399 16.133L14.392 9.552C14.642 9.223 14.407 8.75 13.994 8.75H11.251V2.75C11.251 2.198 10.803 1.75 10.251 1.75H7.751C7.199 1.75 6.751 2.198 6.751 2.75V8.75H4.008C3.595 8.75 3.359 9.223 3.609 9.552Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.609 9.552L8.602 16.133C8.802 16.397 9.199 16.397 9.399 16.133L14.392 9.552C14.642 9.223 14.407 8.75 13.994 8.75H11.251V2.75C11.251 2.198 10.803 1.75 10.251 1.75H7.751C7.199 1.75 6.751 2.198 6.751 2.75V8.75H4.008C3.595 8.75 3.359 9.223 3.609 9.552Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ArrowBoldDown;
