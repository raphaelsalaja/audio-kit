import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretRightToLine({
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
          d="M15.25 2.5C14.836 2.5 14.5 2.836 14.5 3.25V14.75C14.5 15.164 14.836 15.5 15.25 15.5C15.664 15.5 16 15.164 16 14.75V3.25C16 2.836 15.664 2.5 15.25 2.5Z"
          fill={fill}
        />
        <path
          d="M12.07 7.52199L4.68704 2.84004C4.14804 2.49704 3.46503 2.47701 2.90803 2.78401C2.34803 3.09201 2.00104 3.68001 2.00104 4.31801V13.682C2.00104 14.32 2.34903 14.908 2.90803 15.216C3.17103 15.361 3.46104 15.432 3.75104 15.432C4.07704 15.432 4.40202 15.341 4.68802 15.16L12.072 10.478C12.581 10.155 12.884 9.60302 12.884 9.00002C12.884 8.39702 12.58 7.84499 12.072 7.52199H12.07Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CaretRightToLine;
