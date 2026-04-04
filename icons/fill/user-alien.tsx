import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserAlien({
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
          d="M15.2,14.957c-1.528-1.879-3.788-2.957-6.2-2.957s-4.672,1.078-6.2,2.957c-.306,.376-.365,.883-.156,1.323,.212,.444,.647,.72,1.137,.72H14.219c.49,0,.925-.276,1.137-.72,.209-.44,.15-.947-.156-1.323Z"
          fill={secondaryfill}
        />
        <path
          d="M9,1c-2.757,0-5,2.243-5,5,0,2.782,3.164,5.5,5,5.5s5-2.718,5-5.5c0-2.757-2.243-5-5-5Zm-1,6.5c-1.381,0-2.5-1.119-2.5-2.5,0-.276,.224-.5,.5-.5,1.381,0,2.5,1.119,2.5,2.5,0,.276-.224,.5-.5,.5Zm2,0c-.276,0-.5-.224-.5-.5,0-1.381,1.119-2.5,2.5-2.5,.276,0,.5,.224,.5,.5,0,1.381-1.119,2.5-2.5,2.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserAlien;
