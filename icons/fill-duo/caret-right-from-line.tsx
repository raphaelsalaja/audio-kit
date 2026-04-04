import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretRightFromLine({
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
          d="M2.75 2.5C2.336 2.5 2 2.836 2 3.25V14.75C2 15.164 2.336 15.5 2.75 15.5C3.164 15.5 3.5 15.164 3.5 14.75V3.25C3.5 2.836 3.164 2.5 2.75 2.5Z"
          fill={fill}
        />
        <path
          d="M15.07 7.52199L7.68703 2.84004C7.14803 2.49704 6.46503 2.47701 5.90803 2.78401C5.34803 3.09201 5.00104 3.68001 5.00104 4.31801V13.682C5.00104 14.32 5.34903 14.908 5.90803 15.216C6.17103 15.361 6.46104 15.432 6.75104 15.432C7.07704 15.432 7.40203 15.341 7.68803 15.16L15.072 10.478C15.581 10.155 15.884 9.60302 15.884 9.00002C15.884 8.39702 15.58 7.84499 15.072 7.52199H15.07Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CaretRightFromLine;
