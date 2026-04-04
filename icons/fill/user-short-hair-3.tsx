import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserShortHair3({
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
          d="M9,11c2.481,0,4.5-2.019,4.5-4.5V2.75c0-.965-.785-1.75-1.75-1.75H6.25c-.965,0-1.75,.785-1.75,1.75v3.75c0,2.481,2.019,4.5,4.5,4.5Zm0-1.5c-1.654,0-3-1.346-3-3v-.25c0-.689,.561-1.25,1.25-1.25h3.5c.689,0,1.25,.561,1.25,1.25v.25c0,1.654-1.346,3-3,3Z"
          fill={fill}
        />
        <path
          d="M15.2,14.957c-1.528-1.879-3.788-2.957-6.2-2.957s-4.672,1.078-6.2,2.957c-.306,.376-.365,.883-.156,1.323,.212,.444,.647,.72,1.137,.72H14.219c.49,0,.925-.276,1.137-.72,.209-.44,.15-.947-.156-1.323Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default UserShortHair3;
