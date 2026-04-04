import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TagCheck({
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
          d="m13,10.5c-3.0327,0-5.5-2.4673-5.5-5.5,0-1.2485.423-2.3975,1.1266-3.3215-.3024-.1123-.6226-.1785-.9547-.1785H2.75c-.965,0-1.75.7849-1.75,1.75v4.9209c0,.7351.286,1.425.806,1.9451l5.7499,5.75c.536.5359,1.2401.804,1.944.804s1.408-.2681,1.944-.804l3.9221-3.9221c.52-.5188.806-1.209.806-1.9438,0-.1631-.0193-.3225-.0468-.4797-.8884.6162-1.9645.9797-3.1252.9797Zm-7.25-3c-.689,0-1.25-.561-1.25-1.25s.561-1.25,1.25-1.25,1.25.561,1.25,1.25-.561,1.25-1.25,1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13,1c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm2.3076,3.252l-2.25,2.5c-.1377.1528-.332.2422-.5381.2476-.0068.0005-.0127.0005-.0195.0005-.1982,0-.3896-.0786-.5303-.2197l-1.25-1.25c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l.6914.6909,1.7207-1.9126c.2783-.3066.751-.332,1.0596-.0557.3076.2773.333.7515.0557,1.0596Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default TagCheck;
