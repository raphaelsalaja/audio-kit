import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CheckboxChecked2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m8.75.5H3.25C1.733.5.5,1.733.5,3.25v5.5c0,1.517,1.233,2.75,2.75,2.75h5.5c1.517,0,2.75-1.233,2.75-2.75V3.25c0-1.517-1.233-2.75-2.75-2.75Zm.103,3.95l-3.003,4c-.13.174-.33.282-.546.298-.018.001-.036.002-.053.002-.198,0-.389-.078-.53-.219l-1.503-1.5c-.293-.292-.294-.767,0-1.061.292-.294.767-.294,1.061,0l.892.89,2.485-3.31c.249-.331.72-.398,1.05-.149.332.249.398.719.149,1.05Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CheckboxChecked2;
