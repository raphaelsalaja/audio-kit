import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserShortHair4({
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
          d="M9,11c-2.481,0-4.5-2.019-4.5-4.5S6.519,2,9,2s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5Zm0-7.5c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Z"
          fill={fill}
        />
        <path
          d="M15.2,14.957c-1.528-1.879-3.788-2.957-6.2-2.957s-4.672,1.078-6.2,2.957c-.306,.376-.365,.883-.156,1.323,.212,.444,.647,.72,1.137,.72H14.219c.49,0,.925-.276,1.137-.72,.209-.44,.15-.947-.156-1.323Z"
          fill={secondaryfill}
        />
        <path
          d="M12.615,7.5c.088-.318,.135-.654,.135-1,0-2.071-1.679-3.75-3.75-3.75s-3.75,1.679-3.75,3.75c0,.346,.047,.682,.135,1,0,0,.381,0,.381,0-.009-.826,.659-1.5,1.484-1.5h3.5c.826,0,1.493,.674,1.484,1.5h.381Z"
          fill={fill}
          opacity=".3"
        />
      </g>
    </svg>
  );
}

export default UserShortHair4;
