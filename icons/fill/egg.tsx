import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Egg({
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
          d="M9,1C5.266,1,2.45,5.289,2.45,10.977c0,3.77,3.33,6.023,6.55,6.023s6.55-2.253,6.55-6.023c0-5.595-2.877-9.977-6.55-9.977Zm-.565,4.22c-.636,.453-1.501,1.746-1.843,3.898-.059,.369-.377,.632-.739,.632-.039,0-.079-.003-.118-.009-.409-.065-.688-.449-.623-.858,.352-2.215,1.269-4.041,2.454-4.884,.338-.241,.806-.162,1.046,.176s.161,.806-.177,1.046Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Egg;
