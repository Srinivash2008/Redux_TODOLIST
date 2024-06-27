import { increment, decrement, reset } from '../Store/counter/action';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Counter</h1>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <button
                        style={{
                            marginRight: '10px',
                            padding: '8px 16px',
                            fontSize: '16px',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            '@media (max-width: 768px)': {
                                padding: '6px 12px',
                                fontSize: '14px',
                            },
                        }}
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>
                    <span style={{ fontSize: '20px', marginRight: '10px', '@media (max-width: 768px)': { fontSize: '16px' } }}>
                        {count}
                    </span>
                    <button
                        style={{
                            marginRight: '10px',
                            padding: '8px 16px',
                            fontSize: '16px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            '@media (max-width: 768px)': {
                                padding: '6px 12px',
                                fontSize: '14px',
                            },
                        }}
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                    <button
                        style={{
                            padding: '8px 16px',
                            fontSize: '16px',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            '@media (max-width: 768px)': {
                                padding: '6px 12px',
                                fontSize: '14px',
                            },
                        }}
                        onClick={() => dispatch(reset())}
                    >
                        RESET
                    </button>
                </div>
            </div>
        </>
    );
}

export default Counter;