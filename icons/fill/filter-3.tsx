import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Filter3({
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
          d="M14.25,6H3.75c-.282,0-.54,.158-.668,.41s-.104,.553,.062,.781l3.856,5.303v4.756c0,.27,.146,.52,.381,.653,.114,.065,.242,.097,.369,.097,.134,0,.268-.036,.386-.107l2.5-1.5c.226-.135,.364-.379,.364-.643v-3.256l3.856-5.303c.166-.228,.189-.53,.062-.781s-.386-.41-.668-.41Z"
          fill={fill}
        />
        <path
          d="M9,2c.552,0,1-.449,1-1s-.448-1-1-1-1,.449-1,1,.448,1,1,1Z"
          fill={secondaryfill}
        />
        <path
          d="M5.5,2c.552,0,1-.449,1-1s-.448-1-1-1-1,.449-1,1,.448,1,1,1Z"
          fill={secondaryfill}
        />
        <path
          d="M12.5,2c.552,0,1-.449,1-1s-.448-1-1-1-1,.449-1,1,.448,1,1,1Z"
          fill={secondaryfill}
        />
        <path
          d="M10.75,4.5c.552,0,1-.449,1-1s-.448-1-1-1-1,.449-1,1,.448,1,1,1Z"
          fill={secondaryfill}
        />
        <path
          d="M7.25,4.5c.552,0,1-.449,1-1s-.448-1-1-1-1,.449-1,1,.448,1,1,1Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Filter3;
