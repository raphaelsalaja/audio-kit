import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Compass3({
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
          d="M16.996,8.292l-5.407-1.881-1.881-5.407c-.104-.301-.389-.503-.708-.503s-.604,.202-.708,.503l-1.881,5.407-5.407,1.881c-.302,.105-.504,.389-.504,.708s.202,.604,.504,.708l5.407,1.881,1.881,5.407c.104,.301,.389,.503,.708,.503s.604-.202,.708-.503l1.881-5.407,5.407-1.881c.302-.105,.504-.389,.504-.708s-.202-.604-.504-.708Zm-7.996,1.708c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill={fill}
        />
        <path
          d="M5.232,12.768l-1.214-.422-.911,1.519c-.177,.295-.13,.673,.113,.916,.243,.244,.621,.29,.916,.113l1.519-.912-.422-1.214Z"
          fill={secondaryfill}
        />
        <path
          d="M13.982,12.345l-1.214,.422-.422,1.214,1.519,.912c.295,.177,.673,.13,.916-.113,.244-.243,.29-.621,.113-.916l-.911-1.519Z"
          fill={secondaryfill}
        />
        <path
          d="M12.768,5.232l1.214,.422,.911-1.519c.177-.295,.13-.673-.113-.916-.243-.244-.621-.29-.916-.113l-1.519,.912,.422,1.214Z"
          fill={secondaryfill}
        />
        <path
          d="M4.018,5.655l1.214-.422,.422-1.214-1.519-.912c-.295-.177-.673-.13-.916,.113-.244,.243-.29,.621-.113,.916l.911,1.519Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Compass3;
